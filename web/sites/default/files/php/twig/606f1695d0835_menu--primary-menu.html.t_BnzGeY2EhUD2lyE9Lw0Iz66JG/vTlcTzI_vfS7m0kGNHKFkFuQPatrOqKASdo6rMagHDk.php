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

/* core/themes/olivero/templates/navigation/menu--primary-menu.html.twig */
class __TwigTemplate_9a48b11b3a90370c6ec66ffa5ce5d9ca58fccb770108849a280efbaaee60e6de extends \Twig\Template
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
        // line 23
        $macros["menus"] = $this->macros["menus"] = $this;
        // line 24
        echo "
";
        // line 29
        $context["attributes"] = twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => "menu"], "method", false, false, true, 29);
        // line 30
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(twig_call_macro($macros["menus"], "macro_menu_links", [($context["items"] ?? null), ($context["attributes"] ?? null), 0], 30, $context, $this->getSourceContext()));
        echo "

";
    }

    // line 32
    public function macro_menu_links($__items__ = null, $__attributes__ = null, $__menu_level__ = null, ...$__varargs__)
    {
        $macros = $this->macros;
        $context = $this->env->mergeGlobals([
            "items" => $__items__,
            "attributes" => $__attributes__,
            "menu_level" => $__menu_level__,
            "varargs" => $__varargs__,
        ]);

        $blocks = [];

        ob_start(function () { return ''; });
        try {
            // line 33
            echo "  ";
            $context["primary_nav_level"] = ("primary-nav__menu--level-" . (($context["menu_level"] ?? null) + 1));
            // line 34
            echo "  ";
            $macros["menus"] = $this;
            // line 35
            echo "  ";
            if (($context["items"] ?? null)) {
                // line 36
                echo "    <ul ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => "primary-nav__menu", 1 => ($context["primary_nav_level"] ?? null)], "method", false, false, true, 36), 36, $this->source), "html", null, true);
                echo ">
      ";
                // line 37
                $context["attributes"] = twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "removeClass", [0 => ($context["primary_nav_level"] ?? null)], "method", false, false, true, 37);
                // line 38
                echo "      ";
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
                $context['loop'] = [
                  'parent' => $context['_parent'],
                  'index0' => 0,
                  'index'  => 1,
                  'first'  => true,
                ];
                if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof \Countable)) {
                    $length = count($context['_seq']);
                    $context['loop']['revindex0'] = $length - 1;
                    $context['loop']['revindex'] = $length;
                    $context['loop']['length'] = $length;
                    $context['loop']['last'] = 1 === $length;
                }
                foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                    // line 39
                    echo "
        ";
                    // line 40
                    if ((twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["item"], "url", [], "any", false, false, true, 40), "isRouted", [], "any", false, false, true, 40) && (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["item"], "url", [], "any", false, false, true, 40), "routeName", [], "any", false, false, true, 40) == "<nolink>"))) {
                        // line 41
                        echo "          ";
                        $context["menu_item_type"] = "nolink";
                        // line 42
                        echo "        ";
                    } elseif ((twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["item"], "url", [], "any", false, false, true, 42), "isRouted", [], "any", false, false, true, 42) && (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["item"], "url", [], "any", false, false, true, 42), "routeName", [], "any", false, false, true, 42) == "<button>"))) {
                        // line 43
                        echo "          ";
                        $context["menu_item_type"] = "button";
                        // line 44
                        echo "        ";
                    } else {
                        // line 45
                        echo "          ";
                        $context["menu_item_type"] = "link";
                        // line 46
                        echo "        ";
                    }
                    // line 47
                    echo "
        ";
                    // line 48
                    $context["item_classes"] = [0 => "primary-nav__menu-item", 1 => ("primary-nav__menu-item--" . $this->sandbox->ensureToStringAllowed(                    // line 50
($context["menu_item_type"] ?? null), 50, $this->source)), 2 => ("primary-nav__menu-item--level-" . (                    // line 51
($context["menu_level"] ?? null) + 1)), 3 => ((twig_get_attribute($this->env, $this->source,                     // line 52
$context["item"], "in_active_trail", [], "any", false, false, true, 52)) ? ("primary-nav__menu-item--active-trail") : ("")), 4 => ((twig_get_attribute($this->env, $this->source,                     // line 53
$context["item"], "below", [], "any", false, false, true, 53)) ? ("primary-nav__menu-item--has-children") : (""))];
                    // line 56
                    echo "
        ";
                    // line 57
                    $context["link_classes"] = [0 => "primary-nav__menu-link", 1 => ("primary-nav__menu-link--" . $this->sandbox->ensureToStringAllowed(                    // line 59
($context["menu_item_type"] ?? null), 59, $this->source)), 2 => ("primary-nav__menu-link--level-" . (                    // line 60
($context["menu_level"] ?? null) + 1)), 3 => ((twig_get_attribute($this->env, $this->source,                     // line 61
$context["item"], "in_active_trail", [], "any", false, false, true, 61)) ? ("primary-nav__menu-link--active-trail") : ("")), 4 => ((twig_get_attribute($this->env, $this->source,                     // line 62
$context["item"], "below", [], "any", false, false, true, 62)) ? ("primary-nav__menu-link--has-children") : (""))];
                    // line 65
                    echo "
        <li";
                    // line 66
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["item"], "attributes", [], "any", false, false, true, 66), "addClass", [0 => ($context["item_classes"] ?? null)], "method", false, false, true, 66), 66, $this->source), "html", null, true);
                    echo ">
          ";
                    // line 72
                    echo "          ";
                    $context["aria_id"] = \Drupal\Component\Utility\Html::getId((($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "title", [], "any", false, false, true, 72), 72, $this->source) . "-submenu-") . $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["loop"], "index", [], "any", false, false, true, 72), 72, $this->source)));
                    // line 73
                    echo "          ";
                    ob_start(function () { return ''; });
                    // line 74
                    echo "            <span class=\"primary-nav__menu-link-inner\">";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "title", [], "any", false, false, true, 74), 74, $this->source), "html", null, true);
                    echo "</span>
          ";
                    $context["link_title"] = ('' === $tmp = ob_get_clean()) ? '' : new Markup($tmp, $this->env->getCharset());
                    // line 76
                    echo "
          ";
                    // line 77
                    if (((($context["menu_item_type"] ?? null) == "link") || (($context["menu_item_type"] ?? null) == "nolink"))) {
                        // line 78
                        echo "            ";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->getLink((((($context["menu_item_type"] ?? null) == "link")) ? (($context["link_title"] ?? null)) : (twig_get_attribute($this->env, $this->source, $context["item"], "title", [], "any", false, false, true, 78))), $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "url", [], "any", false, false, true, 78), 78, $this->source), ["class" => ($context["link_classes"] ?? null)]), "html", null, true);
                        echo "

            ";
                        // line 80
                        if (twig_get_attribute($this->env, $this->source, $context["item"], "below", [], "any", false, false, true, 80)) {
                            // line 81
                            echo "              ";
                            // line 86
                            echo "              <button class=\"primary-nav__button-toggle\" aria-controls=\"";
                            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["aria_id"] ?? null), 86, $this->source), "html", null, true);
                            echo "\" aria-expanded=\"false\" aria-hidden=\"true\" tabindex=\"-1\">
                <span class=\"visually-hidden\">";
                            // line 87
                            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("@title sub-navigation", ["@title" => twig_get_attribute($this->env, $this->source, $context["item"], "title", [], "any", false, false, true, 87)]));
                            echo "</span>
                <span class=\"icon--menu-toggle\"></span>
              </button>

              ";
                            // line 91
                            $context["attributes"] = twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "setAttribute", [0 => "id", 1 => ($context["aria_id"] ?? null)], "method", false, false, true, 91);
                            // line 92
                            echo "              ";
                            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(twig_call_macro($macros["menus"], "macro_menu_links", [twig_get_attribute($this->env, $this->source, $context["item"], "below", [], "any", false, false, true, 92), ($context["attributes"] ?? null), (($context["menu_level"] ?? null) + 1)], 92, $context, $this->getSourceContext()));
                            echo "
            ";
                        }
                        // line 94
                        echo "
          ";
                    } elseif ((                    // line 95
($context["menu_item_type"] ?? null) == "button")) {
                        // line 96
                        echo "            ";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->getLink($this->sandbox->ensureToStringAllowed(($context["link_title"] ?? null), 96, $this->source), $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "url", [], "any", false, false, true, 96), 96, $this->source), ["class" =>                         // line 97
($context["link_classes"] ?? null), "aria-controls" => ((twig_get_attribute($this->env, $this->source,                         // line 98
$context["item"], "below", [], "any", false, false, true, 98)) ? (($context["aria_id"] ?? null)) : (false)), "aria-expanded" => ((twig_get_attribute($this->env, $this->source,                         // line 99
$context["item"], "below", [], "any", false, false, true, 99)) ? ("false") : (false))]), "html", null, true);
                        // line 101
                        echo "

            ";
                        // line 103
                        $context["attributes"] = twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "setAttribute", [0 => "id", 1 => ($context["aria_id"] ?? null)], "method", false, false, true, 103);
                        // line 104
                        echo "            ";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(twig_call_macro($macros["menus"], "macro_menu_links", [twig_get_attribute($this->env, $this->source, $context["item"], "below", [], "any", false, false, true, 104), ($context["attributes"] ?? null), (($context["menu_level"] ?? null) + 1)], 104, $context, $this->getSourceContext()));
                        echo "
          ";
                    }
                    // line 106
                    echo "        </li>
      ";
                    ++$context['loop']['index0'];
                    ++$context['loop']['index'];
                    $context['loop']['first'] = false;
                    if (isset($context['loop']['length'])) {
                        --$context['loop']['revindex0'];
                        --$context['loop']['revindex'];
                        $context['loop']['last'] = 0 === $context['loop']['revindex0'];
                    }
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 108
                echo "    </ul>
  ";
            }

            return ('' === $tmp = ob_get_contents()) ? '' : new Markup($tmp, $this->env->getCharset());
        } finally {
            ob_end_clean();
        }
    }

    public function getTemplateName()
    {
        return "core/themes/olivero/templates/navigation/menu--primary-menu.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  235 => 108,  220 => 106,  214 => 104,  212 => 103,  208 => 101,  206 => 99,  205 => 98,  204 => 97,  202 => 96,  200 => 95,  197 => 94,  191 => 92,  189 => 91,  182 => 87,  177 => 86,  175 => 81,  173 => 80,  167 => 78,  165 => 77,  162 => 76,  156 => 74,  153 => 73,  150 => 72,  146 => 66,  143 => 65,  141 => 62,  140 => 61,  139 => 60,  138 => 59,  137 => 57,  134 => 56,  132 => 53,  131 => 52,  130 => 51,  129 => 50,  128 => 48,  125 => 47,  122 => 46,  119 => 45,  116 => 44,  113 => 43,  110 => 42,  107 => 41,  105 => 40,  102 => 39,  84 => 38,  82 => 37,  77 => 36,  74 => 35,  71 => 34,  68 => 33,  53 => 32,  46 => 30,  44 => 29,  41 => 24,  39 => 23,);
    }

    public function getSourceContext()
    {
        return new Source("", "core/themes/olivero/templates/navigation/menu--primary-menu.html.twig", "/var/www/html/web/core/themes/olivero/templates/navigation/menu--primary-menu.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("import" => 23, "set" => 29, "macro" => 32, "if" => 35, "for" => 38);
        static $filters = array("escape" => 36, "clean_id" => 72, "t" => 87);
        static $functions = array("link" => 78);

        try {
            $this->sandbox->checkSecurity(
                ['import', 'set', 'macro', 'if', 'for'],
                ['escape', 'clean_id', 't'],
                ['link']
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
