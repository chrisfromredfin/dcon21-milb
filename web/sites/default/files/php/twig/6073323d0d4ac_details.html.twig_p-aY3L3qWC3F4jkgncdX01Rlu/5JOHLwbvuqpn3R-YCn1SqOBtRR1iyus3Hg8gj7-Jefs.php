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

/* core/themes/olivero/templates/form/details.html.twig */
class __TwigTemplate_9831b02463a6a01bef99d66e924bf9b20e68852076825625d9cf58755f41532a extends \Twig\Template
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
        // line 25
        $context["classes"] = [0 => "olivero-details"];
        // line 30
        $context["content_wrapper_classes"] = [0 => "olivero-details__wrapper", 1 => "details-wrapper"];
        // line 35
        echo "<details";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 35), 35, $this->source), "html", null, true);
        echo ">";
        // line 36
        if (($context["title"] ?? null)) {
            // line 38
            $context["summary_classes"] = [0 => "olivero-details__summary", 1 => ((            // line 40
($context["required"] ?? null)) ? ("js-form-required") : ("")), 2 => ((            // line 41
($context["required"] ?? null)) ? ("form-required") : (""))];
            // line 44
            echo "    <summary";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["summary_attributes"] ?? null), "addClass", [0 => ($context["summary_classes"] ?? null)], "method", false, false, true, 44), 44, $this->source), "html", null, true);
            echo ">";
            // line 45
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title"] ?? null), 45, $this->source), "html", null, true);
            // line 46
            if (($context["required"] ?? null)) {
                // line 47
                echo "<span class=\"required-mark\"></span>";
            }
            // line 49
            echo "</summary>";
        }
        // line 51
        echo "<div";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content_attributes"] ?? null), "addClass", [0 => ($context["content_wrapper_classes"] ?? null)], "method", false, false, true, 51), 51, $this->source), "html", null, true);
        echo ">
    ";
        // line 52
        if (($context["errors"] ?? null)) {
            // line 53
            echo "      <div class=\"form-item form-item--error-message\">
        ";
            // line 54
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["errors"] ?? null), 54, $this->source), "html", null, true);
            echo "
      </div>
    ";
        }
        // line 57
        if (($context["description"] ?? null)) {
            // line 58
            echo "<div class=\"olivero-details__description\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["description"] ?? null), 58, $this->source), "html", null, true);
            echo "</div>";
        }
        // line 60
        if (($context["children"] ?? null)) {
            // line 61
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["children"] ?? null), 61, $this->source), "html", null, true);
        }
        // line 63
        if (($context["value"] ?? null)) {
            // line 64
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["value"] ?? null), 64, $this->source), "html", null, true);
        }
        // line 66
        echo "</div>
</details>
";
    }

    public function getTemplateName()
    {
        return "core/themes/olivero/templates/form/details.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  100 => 66,  97 => 64,  95 => 63,  92 => 61,  90 => 60,  85 => 58,  83 => 57,  77 => 54,  74 => 53,  72 => 52,  67 => 51,  64 => 49,  61 => 47,  59 => 46,  57 => 45,  53 => 44,  51 => 41,  50 => 40,  49 => 38,  47 => 36,  43 => 35,  41 => 30,  39 => 25,);
    }

    public function getSourceContext()
    {
        return new Source("", "core/themes/olivero/templates/form/details.html.twig", "/var/www/html/web/core/themes/olivero/templates/form/details.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 25, "if" => 36);
        static $filters = array("escape" => 35);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if'],
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
