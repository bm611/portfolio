import reflex as rx


def nav() -> rx.Component:
    return rx.hstack(
        rx.hstack(
            rx.text("Home", class_name="font-semibold text-xl"),
            rx.text("Projects", class_name="font-semibold text-xl"),
            rx.text("About", class_name="font-semibold text-xl"),
            class_name="space-x-5",
        ),
        rx.hstack(
            rx.text(
                "Contact",
                class_name="font-semibold text-black border-2 border-grey bg-white rounded-3xl p-3",
            ),
            rx.text(
                "Github",
                class_name="font-semibold text-black border-2 border-grey bg-white rounded-3xl p-3",
            ),
        ),
        class_name="border-2 border-grey rounded-full p-4 px-6 flex space-x-10 justify-around items-center mx-auto",
    )
