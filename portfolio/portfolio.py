"""Welcome to Reflex! This file outlines the steps to create a basic app."""

from pydantic_core.core_schema import LaxOrStrictSchema
import reflex as rx
from components.nav import nav


class State(rx.State):
    """The app state."""


@rx.page(route="/", title="Landing")
def index() -> rx.Component:
    # Welcome Page (Index)
    return rx.vstack(
        nav(),
        rx.text("I'm Bharath Mohan", class_name="pt-10 text-8xl font-bold text-center"),
        rx.text(
            "Crafting  ",
            rx.text(
                "Full Stack",
                class_name="text-2xl leading-relaxed bg-white text-black px-2 py-1 rounded mx-auto",
                as_="span",
            ),
            " solutions powered by the latest in ML.",
            class_name="text-2xl leading-relaxed text-gray-600 mx-auto",
        ),
        rx.text(
            "I also do ",
            rx.text(
                "Astro",
                class_name="text-2xl leading-relaxed bg-white text-black px-2 py-1 rounded mx-auto",
                as_="span",
            ),
            " and ",
            rx.text(
                "Landscape",
                class_name="text-2xl leading-relaxed bg-white text-black px-2 py-1 rounded mx-auto",
                as_="span",
            ),
            " photography",
            class_name="text-2xl leading-relaxed text-gray-600 mx-auto",
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
            class_name="grid gap-x-6 gap-y-3 grid-cols-2 mx-auto",
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
