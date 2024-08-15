import reflex as rx


def nav() -> rx.Component:
    return rx.hstack(
        rx.hstack(
            rx.link(
                "Home",
                href="/",
                class_name="font-semibold text-white text-xl hover:text-teal-500",
            ),
            rx.text("Projects", class_name="font-semibold text-xl hover:text-teal-500"),
            rx.link(
                "Blog",
                href="/blog",
                class_name="font-semibold text-xl text-white hover:text-teal-500",
            ),
            rx.text("About", class_name="font-semibold text-xl hover:text-teal-500"),
            class_name="space-x-5",
        ),
        class_name="border-2 border-grey rounded-full p-4 px-6 flex space-x-10 justify-around items-center mx-auto",
    )
