"""Welcome to Reflex! This file outlines the steps to create a basic app."""

import reflex as rx
from components.nav import nav


class State(rx.State):
    """The app state."""


@rx.page(route="/", title="Landing")
def index() -> rx.Component:
    # Welcome Page (Index)
    return rx.vstack(
        nav(),
        class_name="w-full max-w-7xl p-3 space-y-4 mx-auto",
    )


style = {
    "font_family": "Monaspace Argon",
    "font_size": "16px",
}

app = rx.App(
    style=style,
    theme=rx.theme(
        appearance="inherit", has_background=True, radius="large", accent_color="teal"
    ),
)
