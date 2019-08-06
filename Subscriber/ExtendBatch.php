<?php

namespace WwExtendBatch\Subscriber;

use Enlight\Event\SubscriberInterface;

class ExtendBatch implements SubscriberInterface 
{
    /**
     *  The install method of your plugin base file
     */
    public static function getSubscribedEvents()
    {
        return [
            'Enlight_Controller_Action_PostDispatchSecure_Frontend_Register' => 'onFrontendRegister'
        ];
    }
    
    /**
     * Event callback for the event registered above
     */
    public function onFrontendRegister(\Enlight_Event_EventArgs $args)
    {
        /** @var $controller \Enlight_Controller_Action */
        $controller = $args->getSubject();
        $view = $controller->View();

        $basket = Shopware()->Modules()->Basket();
        
        // DO SOMETHING
        $view->assign('sBasket', $basket->sGetBasketData());
    }
}

