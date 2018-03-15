<?php

namespace CharactersBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('CharactersBundle:Default:index.html.twig');
    }
}
