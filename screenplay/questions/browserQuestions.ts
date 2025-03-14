import { By, PageElement } from "@serenity-js/web";

export const textArea = () => {
  return PageElement.located(By.css("textarea#APjFqb")).describedAs(
    "text area",
  );
};

export const acceptButton = () => {
  return PageElement.located(
    By.cssContainingText("button", "Piekrist visiem"),
  ).describedAs("accept button by text");
};
