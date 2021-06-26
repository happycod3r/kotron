import components.headerbar.HeaderBar
import components.headerbar.HeaderBarProps
import react.*
import react.dom.div

external interface WelcomeProps : RProps {
    var name: String
}

data class WelcomeState(val name: String) : RState

@JsExport
class Welcome(props: WelcomeProps) : RComponent<WelcomeProps, WelcomeState>(props) {

    init {
        state = WelcomeState(props.name)
    }

    private fun RBuilder.headerBar(handler: HeaderBarProps.() -> Unit): ReactElement = child(HeaderBar::class){ this.attrs(handler) }

    override fun RBuilder.render() {
      div {
          headerBar {  }
      }
    }
}
