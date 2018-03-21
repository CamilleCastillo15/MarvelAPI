<?php

namespace Marvel\CharactersBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        $apiKeyPublic = "b4ff43fef8c49cd2d6393821ef4b82a5";
        $apiKeyPrivate = "8db77b1f10ec23835d6465b818d3f47c579552a0";
        $ts = time();
        
        //hash - a md5 digest of the ts parameter, 
        //your private key 
        //and your public key 
        //(e.g. md5(ts+privateKey+publicKey)
        $concat = (string)$ts.$apiKeyPrivate.$apiKeyPublic;
        $hash = md5($concat);
        $offset = 100;
        $limit = 20;
        
        $url = "http://gateway.marvel.com/v1/public/characters?ts=".$ts."&apikey=".$apiKeyPublic."&hash=".$hash."&limit=".$limit."&offset=".$offset;
        
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
        $result_display = array();
        
        foreach($result['data']['results'] as $i => $character){
            
            $result_display[$i]['name'] = $character['name'];
            $path = $character['thumbnail']['path'];
            dump($path);
            $path_uri = $path.'.jpg';
            
            $result_display[$i]['thumbnail'] = $path_uri;
            
        }
        
        //dump($result_display); exit();
        //var_dump($concat, $ch, $result); exit();
        //exit();
        
        return $this->render('MarvelCharactersBundle:Default:index.html.twig', array(
            "result" => $result_display
        ));
    }
}
