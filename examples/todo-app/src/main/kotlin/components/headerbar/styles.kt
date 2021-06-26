package components.headerbar

import kotlinx.css.*
import styled.StyleSheet

object HeaderBarStyles : StyleSheet("HeaderBarStyles", isStatic = true) {
    val textContainer by css {
        padding(20.px)

        backgroundColor = rgb(8, 97, 22)
        color = rgb(56, 246, 137)
    }
}