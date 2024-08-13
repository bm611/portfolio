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
        rx.text("Welcome to Reflex", class_name="pt-10 text-3xl font-bold text-center"),
        rx.text(
            "Reflex is a fast and modern framework for building web applications.",
            class_name="text-lg leading-relaxed text-gray-600 text-center",
        ),
        rx.grid(
            rx.box(
                rx.text("Project 1", font_weight="bold"),
                rx.text("Description of Project 1"),
                class_name="p-4 border rounded-lg transition-all duration-300 hover:shadow-lg hover:border-teal-500 hover:glow-teal-500",
            ),
            rx.box(
                rx.text("Project 2", font_weight="bold"),
                rx.text("Description of Project 2"),
                class_name="p-4 border rounded-lg transition-all duration-300 hover:shadow-lg hover:border-teal-500 hover:glow-teal-500",
            ),
            rx.box(
                rx.text("Project 3", font_weight="bold"),
                rx.text("Description of Project 3"),
                class_name="p-4 border rounded-lg transition-all duration-300 hover:shadow-lg hover:border-teal-500 hover:glow-teal-500",
            ),
            rx.box(
                rx.text("Project 4", font_weight="bold"),
                rx.text("Description of Project 4"),
                class_name="p-4 border rounded-lg transition-all duration-300 hover:shadow-lg hover:border-teal-500 hover:glow-teal-500",
            ),
            template_columns="repeat(2, 1fr)",
            gap=4,
            class_name="mt-8 grid grid-cols-2 gap-6",
        ),
        class_name="max-w-5xl p-3 space-y-4 mx-auto",
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
