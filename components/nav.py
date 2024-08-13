import reflex as rx


def nav() -> rx.Component:
    return rx.hstack(
        rx.hstack(
            rx.text("Home", class_name="font-semibold text-xl hover:text-teal-500"),
            rx.text("Projects", class_name="font-semibold text-xl hover:text-teal-500"),
            rx.text("About", class_name="font-semibold text-xl hover:text-teal-500"),
            class_name="space-x-5",
        ),
        class_name="border-2 border-grey rounded-full p-4 px-6 flex space-x-10 justify-around items-center mx-auto",
    )
