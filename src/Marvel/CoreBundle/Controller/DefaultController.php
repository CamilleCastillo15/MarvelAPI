<?php

namespace Marvel\CoreBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('MarvelCoreBundle:Default:index.html.twig');
    }
}
