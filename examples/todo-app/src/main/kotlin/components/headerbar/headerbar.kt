package components.headerbar

import react.*
import styled.*

external interface HeaderBarProps : RProps {
    var name: String
}

data class HeaderBarState(val name: String) : RState

@JsExport
class HeaderBar(props: HeaderBarProps) : RComponent<HeaderBarProps, HeaderBarState>(props) {

    init {
        state = HeaderBarState(props.name)
    }

    override fun RBuilder.render() {
        styledDiv {
            css {
                +HeaderBarStyles.textContainer
            }
            +"Todo Kotlin App"
        }
    }
}

