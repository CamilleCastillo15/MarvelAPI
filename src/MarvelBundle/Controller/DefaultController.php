<?php

namespace MarvelBundle\Controller;

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
        
        $url = "http://gateway.marvel.com/v1/public/characters?ts=".$ts."&apikey=".$apiKeyPublic."&hash=".$hash;
        //$url = "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150";
        
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
        dump($result);
        //var_dump($concat, $ch, $result); exit();
        //exit();
        return $this->render('MarvelBundle:Default:index.html.twig');
    }
    
    public function useGuzzle(){
        $data = $request->getContent();
        
        /*$author = $this
                ->get('serializer')
                ->deserialize($data, 'array', 'json');*/
    }
    
}
