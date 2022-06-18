import React from "react";
import { BlockQuote, DocLinks } from "../control";
import { Elink, Link } from "@beyond/ui/link/code";
import { Controls } from "./controls";

export function useRender(content: object) {
  const data = {
    starting: {
      items: [
        {
          s1: "ts: ",
          items: [
            "controller.tsx: Component controller object, required to mount the WebComponent in the browser.",
            "views/page.tsx: React component that renders the page.",
          ],
        },
      ],
    },
  };
  const controls = Controls;
  const regexp = /[q|h|p|l|e|t]{1}?\d{1}|items\d{0,1}|\d/;

  const analize = (item, data, output, id) => {
    const value = data[item];

    // validacion items
    if (item.includes("items")) {
      const Control = controls.items;

      let items = [];
      let children = [];
      data[item].forEach((element, index) => {
        if (typeof element === "object") {
          const elements = check(element, [], `${i}.${index}`);

          items = items.concat(elements);
        } else {
          items.push(element);
        }
      });

      output.push(
        <Control key={`${id}${item}`} content={items}>
          {children}
        </Control>
      );
      return;
    }

    /**
     * Si es un objeto recursivo
     */
    if (!regexp.test(item)) {
      check(data[item], output, item);
      return;
    }
    // blockQuote
    if (["q"].includes(item[0])) {
      const quote = check(data[item], [], `${item[0]}.${id}`);
      output.push(<BlockQuote>{quote}</BlockQuote>);
      return;
    }
    //links
    if (["e", "l"].includes(item[0])) {
      const Control = controls[item[0]];

      const attrs = {
        key: `${id}${item}`,
        item: data[item],
      };
      if (item[0] === "e") attrs.external = true;
      output.push(<DocLinks {...attrs} />);
      return;
    }
    if (typeof data[item] === "object") {
      check(data[item], output, item);
      return;
    }
    const Control = controls[item[0]];
    output.push(
      <Control key={`${id}${item}`} selector={item} content={data[item]} />
    );
  };

  let i = 0;
  const check = (data, output, id = "first.") => {
    if (i > 50) return console.log("TOP.......");

    i++;
    const keys = Object.keys(data);
    keys.forEach((item) => analize(item, data, output, id));
    return output;
  };

  const output = check(data, []);
  // const output = check(content, []);
  return output;
}
