module.exports = {".accordion":{"display":"flex","flexDirection":"column"},".accordion li":{"display":"flex","flexDirection":"column","overflow":"hidden"},".accordion li .accordion-title":{"cursor":"pointer","marginBottom":"0px","paddingLeft":"1rem","paddingRight":"1rem","paddingTop":"1rem","paddingBottom":"1rem","position":"relative","transitionProperty":"all","transitionTimingFunction":["cubic-bezier(0.4, 0, 0.2, 1)","cubic-bezier(0.4, 0, 0.2, 1)"],"transitionDuration":["150ms","300ms"]},".accordion li .accordion-body":{"maxHeight":"0px","paddingLeft":"1rem","paddingRight":"1rem","paddingBottom":"0px","transitionProperty":"all","transitionTimingFunction":["cubic-bezier(0.4, 0, 0.2, 1)","cubic-bezier(0.4, 0, 0.2, 1)"],"transitionDuration":["150ms","300ms"]},".accordion li input":{"display":"none"},".accordion li input:checked ~ .accordion-body":{"maxHeight":"100vh"},".accordion.arrow li input":{"display":"none"},".accordion.arrow li input:checked + .accordion-title:after":{"transform":"rotate(225deg)"},".accordion.arrow li .accordion-title:after":{"display":"block","height":"0.5rem","position":"absolute","width":"0.5rem","transitionProperty":"all","transitionTimingFunction":["cubic-bezier(0.4, 0, 0.2, 1)","cubic-bezier(0.4, 0, 0.2, 1)"],"transitionDuration":["150ms","300ms"],"top":"1.5rem","right":"1.5rem","content":"''","transformOrigin":"75% 75%","transform":"rotate(45deg)","boxShadow":"2px 2px"},".accordion.arrow li .accordion-title .btn.accordion.arrow li .accordion-title .btn:after":{"width":"100%"},".accordion.plus li input":{"display":"none"},".accordion.plus li input:checked + .accordion-title:after":{"content":"'−'"},".accordion.plus li .accordion-title:after":{"display":"flex","alignItems":"center","justifyContent":"center","height":"1.5rem","position":"absolute","width":"1.5rem","top":"1rem","right":"1rem","content":"'+'"},".alert":{"display":"flex","alignItems":"center","justifyContent":"space-between","lineHeight":"2rem","padding":"0.75rem","position":"relative"},".alert>*":{"flexShrink":"0"},".alert>label":{"flexGrow":"1","flexShrink":"1","marginTop":"0px","marginBottom":"0px","marginLeft":"0.75rem","marginRight":"0.75rem"},".badge":{"display":"inline-block","fontSize":"0.875rem","lineHeight":["1.25rem","1rem"],"paddingLeft":"0.5rem","paddingRight":"0.5rem","transitionProperty":"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform","transitionTimingFunction":["cubic-bezier(0.4, 0, 0.2, 1)","cubic-bezier(0.4, 0, 0.2, 1)"],"transitionDuration":["150ms","200ms"]},".btn":{"cursor":"pointer","display":"flex","alignItems":"center","justifyContent":"center","textAlign":"center","WebkitUserSelect":"none","MozUserSelect":"none","msUserSelect":"none","userSelect":"none","transitionProperty":"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform","transitionTimingFunction":["cubic-bezier(0.4, 0, 0.2, 1)","cubic-bezier(0.4, 0, 0.2, 1)"],"transitionDuration":["150ms","200ms"],"height":"3rem","fontSize":"1.125rem","lineHeight":["1.75rem","2"],"paddingLeft":"1.5rem","paddingRight":"1.5rem"},".btn:focus":{"outline":"2px solid transparent","outlineOffset":"2px","position":"relative"},".btn.disabled, .btn[disabled]":{"pointerEvents":"none"},".btn.wide":{"width":"16rem"},".btn.lg":{"height":"4rem","fontSize":"1.25rem","lineHeight":["1.75rem","2"],"paddingLeft":"2.5rem","paddingRight":"2.5rem"},".btn.sm":{"height":"2rem","fontSize":"1rem","lineHeight":["1.5rem","2rem"],"paddingLeft":"1rem","paddingRight":"1rem"},".btn.xs":{"height":"1.5rem","fontSize":"0.875rem","lineHeight":["1.25rem","1.625"],"paddingLeft":"0.5rem","paddingRight":"0.5rem"},".btn.block":{"width":"100%"},".btn.square.xs":{"height":"1.5rem","padding":"0px","width":"1.5rem"},".btn.square.sm":{"height":"2rem","padding":"0px","width":"2rem"},".btn.square":{"height":"3rem","padding":"0px","width":"3rem"},".btn.square.lg":{"height":"4rem","padding":"0px","width":"4rem"},".btn.circle.xs":{"borderRadius":"9999px","height":"1.5rem","padding":"0px","width":"1.5rem"},".btn.circle.sm":{"borderRadius":"9999px","height":"2rem","padding":"0px","width":"2rem"},".btn.circle":{"borderRadius":"9999px","height":"3rem","padding":"0px","width":"3rem"},".btn.circle.lg":{"borderRadius":"9999px","height":"4rem","padding":"0px","width":"4rem"},".btn.loading, .btn.loading:hover":{"pointerEvents":"none"},".btn.loading:before":{"borderRadius":"9999px","height":"1rem","marginRight":"0.5rem","width":"1rem","WebkitAnimation":"spin 1s linear infinite","animation":"spin 1s linear infinite","content":"\"\"","border":"2px solid","borderTopColor":"transparent","borderLeftColor":"transparent","borderBottomColor":"var(--color-content-100)","borderRightColor":"var(--color-content-100)"},".btn-group":{"display":"flex"},".btn-group > input[type=\"radio\"].btn":{"WebkitAppearance":"none","MozAppearance":"none","appearance":"none"},".btn-group > input[type=\"radio\"].btn:before":{"content":"attr(data-title)"},".card":{"display":"flex","flexDirection":"column","overflow":"hidden","position":"relative"},".card.side":{"flexDirection":"row","alignItems":"stretch"},".card-body":{"display":"flex","flexDirection":"column","flex":"1 1 auto"},".card:not(.side) > figure, .card:not(.side) > figure > *":{"width":"100%"},".card-actions":{"display":"flex","alignItems":"flex-start"},".card.image-full":{"display":"grid"},".card.image-full:before":{"position":"relative","content":"\"\""},".card.image-full:before, .card.image-full > *":{"gridColumnStart":"1","gridRowStart":"1"},".card.image-full > figure img":{"height":"100%","OObjectFit":"cover","objectFit":"cover"},".card.side.image-full > figure img":{"width":"100%"},".card.image-full > .card-body":{"position":"relative"}};