import reflex as rx


def hero():
    return rx.vstack(
        rx.text("I'm Bharath Mohan", class_name="pt-10 text-8xl font-bold text-center"),
        rx.text(
            "Crafting  ",
            rx.text(
                "Full Stack",
                class_name="text-2xl leading-relaxed bg-white text-black px-2 py-1 rounded mx-auto hover:bg-teal-500",
                as_="span",
            ),
            " solutions powered by the latest in ML.",
            class_name="text-2xl leading-relaxed text-gray-600 mx-auto",
        ),
        rx.text(
            "I also do ",
            rx.text(
                "Astro",
                class_name="text-2xl leading-relaxed bg-white text-black px-2 py-1 rounded mx-auto hover:bg-teal-500",
                as_="span",
            ),
            " and ",
            rx.text(
                "Landscape",
                class_name="text-2xl leading-relaxed bg-white text-black px-2 py-1 rounded mx-auto hover:bg-teal-500",
                as_="span",
            ),
            " photography",
            class_name="text-2xl leading-relaxed text-gray-600 mx-auto",
        ),
        class_name="py-24",
    )
