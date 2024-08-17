import reflex as rx

chip_props = {
    "radius": "full",
    "variant": "soft",
    "size": "3",
    "cursor": "pointer",
    "style": {"_hover": {"opacity": 0.75}},
}

available_items = ["ML/AI", "Photo", "Coffee", "Tennis"]


class SingleSelectionChipsState(rx.State):
    selected_item: str = ""


def unselected_item(item: str) -> rx.Component:
    return rx.badge(
        item,
        color_scheme="gray",
        **chip_props,
        on_click=SingleSelectionChipsState.setvar("selected_item", item),
    )


def selected_item(item: str) -> rx.Component:
    return rx.badge(
        rx.icon("check", size=18),
        item,
        color_scheme="mint",
        **chip_props,
        on_click=SingleSelectionChipsState.setvar("selected_item", ""),
    )


def item_chip(item: str) -> rx.Component:
    return rx.cond(
        SingleSelectionChipsState.selected_item == item,
        selected_item(item),
        unselected_item(item),
    )


def item_selector() -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.foreach(available_items, item_chip),
            wrap="wrap",
            spacing="2",
        ),
        align_items="start",
        spacing="4",
        width="100%",
    )


def blog_layout() -> rx.Component:
    return rx.vstack(
        rx.text("Filter by Category", class_name="text-3xl pt-10"),
        item_selector(),
    )
