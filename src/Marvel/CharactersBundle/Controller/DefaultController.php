<?php

namespace Marvel\CharactersBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function getResultsUrl($id = null){
        
        $apiKeyPublic = "b4ff43fef8c49cd2d6393821ef4b82a5";
        $apiKeyPrivate = "8db77b1f10ec23835d6465b818d3f47c579552a0";
        $ts = time();
        
        //hash - a md5 digest of the ts parameter, 
        //your private key 
        //and your public key 
        //(e.g. md5(ts+privateKey+publicKey)
        $concat = (string)$ts.$apiKeyPrivate.$apiKeyPublic;
        $hash = md5($concat);
        
        if($id != null){
            $concatUrl = "&id=".$id;
        }else{
            $limit = 20;
            $offset = 100;
            $concatUrl = "&limit=".$limit."&offset=".$offset;
        }
        
        $url = "http://gateway.marvel.com/v1/public/characters?ts=".$ts."&apikey=".$apiKeyPublic."&hash=".$hash.$concatUrl;

        $ch = curl_init();
        // configuration des options
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch,CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
        curl_setopt($ch,CURLOPT_RETURNTRANSFER,TRUE);
        // exécution de la session
        $result = curl_exec($ch);
        // fermeture des ressources
        curl_close($ch);
        /*curl_multi_getcontent($ch);
        $xml = simplexml_load_string($test);
        $test = file_get_contents($url);*/
        
        /*$data = $this
                ->get('serializer')
                ->deserialize($result, 'json', 'array');*/
        //$result = preg_replace('!s:(\d+):"(.*?)";!e', "'s:'.strlen('$2').':\"$2\";'", $result);
        //unserialize($result);
        $result = json_decode($result, true);
        return $result;
        
    }
    
    public function indexAction()
    {
        $result = $this->getResultsUrl();
        $result_display = array();
        $result_persos = array();
        
        foreach($result['data']['results'] as $i => $character){
            
            $result_display[$i]['id'] = $character['id'];
            $result_display[$i]['name'] = $character['name'];
            
            // On récupère l'URL de la vignette
            $path = $character['thumbnail']['path'];
            $path_uri = $path.'.jpg';
            
            $result_display[$i]['thumbnail'] = $path_uri;
            
            // On stocke les noms des persos dans un tableau à part
            // Pour pouvoir faire le tri en front (avec tablesorter)
            $result_persos[$i] = $character['name'];
            
        }
        
        $footer_link = $result['attributionHTML'];
        
        return $this->render('MarvelCharactersBundle:Default:index.html.twig', array(
            "result" => $result_display,
            "result_persos" => $result_persos,
            'footer_link' => $footer_link
        ));
    }
    
    public function detailAction($id)
    {
        //Dans le détail :
        // name / description / image / 
        // le nombre de comics où le personnage apparait / 
        // les titres des 3 premiers comics où le personnage apparait
        
        // Récupération des données d'un personnage grâce à l'id
        $result = $this->getResultsUrl($id);
        $result_display = array();
        
        foreach($result['data']['results'] as $i => $character){
            
            if (isset($result_display['id'])) $result_display['id'] = $character['id'];
            $result_display['name'] = $character['name'];
            $result_display['desc'] = $character['description'];
            
            $path = $character['thumbnail']['path'];
            $path_uri = $path.'.jpg';
            
            $result_display['thumbnail'] = $path_uri;
            
            $result_display['nb_comics'] = $character['comics']['returned'];
            
            $result_display['comics'] = array();
            
             // Vérification qu'il y ait au moins 3 comics où le perso apparaît
            if (isset($character['comics']['items'][0]) && isset($character['comics']['items'][2])) {
                for($i=0;$i<3;$i++){
                    $result_display['comics'][$i] = $character['comics']['items'][$i]['name'];
                }
            } else {
                $result_display['comics'][0] = "Less than 3";
            }
            
        }
        
        return $this->render('MarvelCharactersBundle:Default:detail.html.twig', array(
            "result" => $result_display
        ));
        
    }
}
