import reflex as rx

from components.hero import hero
from components.nav import nav
from components.blog import blog_layout
from components.project import project_layout


class State(rx.State):
    """The app state."""


@rx.page(route="/", title="Landing")
def index() -> rx.Component:
    return rx.vstack(
        nav(),
        hero(),
        class_name="max-w-5xl p-4 space-y-4 mx-auto",
    )


@rx.page(route="/blog", title="blog")
def blog() -> rx.Component:
    return rx.vstack(
        nav(),
        blog_layout(),
        class_name="max-w-5xl p-4 space-y-4 mx-auto",
    )


@rx.page(route="/projects", title="projets")
def projects() -> rx.Component:
    return rx.vstack(
        nav(),
        project_layout(),
        class_name="max-w-5xl p-4 space-y-4 mx-auto",
    )


style = {
    "font_family": "Monaspace Argon",
    "font_size": "16px",
    "background": "url('/bg_image.jpeg')",
    "height": "100vh",
    "width": "100vw",
    "background_size": "cover",
    "background_position": "center",
}

app = rx.App(
    style=style,
    theme=rx.theme(
        appearance="inherit", has_background=True, radius="large", accent_color="teal"
    ),
)
