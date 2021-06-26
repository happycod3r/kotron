package org.jetbrains.compose.desktop

import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.MutableState
import androidx.compose.desktop.Window
import androidx.compose.desktop.WindowEvents
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.preferredHeight
import androidx.compose.foundation.layout.padding
import androidx.compose.material.Surface
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.IntSize
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.TextField
import androidx.compose.material.Button
import androidx.compose.foundation.Text
import org.jetbrains.compose.desktop.browser.Browser
import org.jetbrains.compose.desktop.browser.BrowserView
import org.jetbrains.compose.desktop.browser.BrowserSlicer

fun main(args: Array<String>) {
    val browser = when {
        args.isEmpty() -> BrowserView()
        args[0] == "slices" -> BrowserSlicer(IntSize(800, 700))
        else -> {
            BrowserView()
        }
    }

    val url = mutableStateOf("http://localhost:8080")

    Window(
        title = "CEF-compose",
        size = IntSize(900, 900),
        events = WindowEvents(
            onFocusGet = { browser.load(url.value) }
        )
    ) {
        Surface(
            modifier = Modifier.fillMaxSize(),
            color = Color.DarkGray
        ) {
            Column {
                WebView(browser)
            }
        }
    }
}

@Composable
private fun WebView(browser: Browser) {
    Surface(
        color = Color.Gray,
        modifier = Modifier.fillMaxSize().padding(10.dp)
    ) {
        when (browser) {
            is BrowserView -> {
                browser.view()
            }
            is BrowserSlicer -> {
                Column {
                    browser.slice(0, 200)
                    Spacer(Modifier.height(30.dp))
                    browser.slice(200, 200)
                    Spacer(Modifier.height(30.dp))
                    browser.tail()
                }
            }
        }
    }
}
