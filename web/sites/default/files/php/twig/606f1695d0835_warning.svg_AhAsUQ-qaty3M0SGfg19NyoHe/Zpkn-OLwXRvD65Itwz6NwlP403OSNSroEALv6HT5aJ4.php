<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* @olivero/../images/warning.svg */
class __TwigTemplate_611a27a798fcbf23319424052bec2d54d412e3356bcf03dd86dfa70ff257653f extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        echo "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32px\" height=\"32px\" viewBox=\"0 0 32 32\">
  <path d=\"M16,0C7.2,0,0,7.2,0,16c0,8.8,7.2,16,16,16c8.8,0,16-7.2,16-16C32,7.2,24.8,0,16,0z M18.7,26c0,0.4-0.3,0.7-0.6,0.7h-4c-0.4,0-0.7-0.3-0.7-0.7v-4c0-0.4,0.3-0.7,0.7-0.7h4c0.4,0,0.6,0.3,0.6,0.7V26z M18.6,18.8c0,0.3-0.3,0.5-0.7,0.5h-3.9c-0.4,0-0.7-0.2-0.7-0.5L13,5.9c0-0.1,0.1-0.3,0.2-0.4c0.1-0.1,0.3-0.2,0.5-0.2h4.6c0.2,0,0.4,0.1,0.5,0.2C18.9,5.6,19,5.7,19,5.9L18.6,18.8z\"/>
</svg>
";
    }

    public function getTemplateName()
    {
        return "@olivero/../images/warning.svg";
    }

    public function getDebugInfo()
    {
        return array (  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "@olivero/../images/warning.svg", "/var/www/html/web/core/themes/olivero/images/warning.svg");
    }
    
    public function checkSecurity()
    {
        static $tags = array();
        static $filters = array();
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                [],
                [],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
