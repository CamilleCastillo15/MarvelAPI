<?php

namespace Marvel\CharactersBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('MarvelCharactersBundle:Default:index.html.twig');
    }
}
