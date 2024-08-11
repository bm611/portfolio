"""Welcome to Reflex! This file outlines the steps to create a basic app."""

import reflex as rx


class State(rx.State):
    """The app state."""


@rx.page(route="/", title="Landing")
def index() -> rx.Component:
    # Welcome Page (Index)
    return rx.vstack(rx.heading("HELLO!!"))


style = {
    "font_family": "Monaspace Neon",
    "font_size": "16px",
}

app = rx.App(
    style=style,
    theme=rx.theme(
        appearance="light", has_background=True, radius="large", accent_color="teal"
    ),
)
