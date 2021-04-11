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

/* core/themes/seven/templates/classy/content-edit/text-format-wrapper.html.twig */
class __TwigTemplate_e63f5537b33b272195e975084e17ebf9b86e50f7f35f62410af8292d18837cf6 extends \Twig\Template
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
        // line 16
        echo "<div class=\"js-text-format-wrapper text-format-wrapper js-form-item form-item\">
  ";
        // line 17
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["children"] ?? null), 17, $this->source), "html", null, true);
        echo "
  ";
        // line 18
        if (($context["description"] ?? null)) {
            // line 19
            echo "    ";
            // line 20
            $context["classes"] = [0 => ((            // line 21
($context["aria_description"] ?? null)) ? ("description") : (""))];
            // line 24
            echo "    <div";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 24), 24, $this->source), "html", null, true);
            echo ">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["description"] ?? null), 24, $this->source), "html", null, true);
            echo "</div>
  ";
        }
        // line 26
        echo "</div>
";
    }

    public function getTemplateName()
    {
        return "core/themes/seven/templates/classy/content-edit/text-format-wrapper.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  61 => 26,  53 => 24,  51 => 21,  50 => 20,  48 => 19,  46 => 18,  42 => 17,  39 => 16,);
    }

    public function getSourceContext()
    {
        return new Source("", "core/themes/seven/templates/classy/content-edit/text-format-wrapper.html.twig", "/var/www/html/web/core/themes/seven/templates/classy/content-edit/text-format-wrapper.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 18, "set" => 20);
        static $filters = array("escape" => 17);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['if', 'set'],
                ['escape'],
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
