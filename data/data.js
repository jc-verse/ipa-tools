import * as CSV from "csv";
import * as FS from "node:fs/promises";
import { fileURLToPath } from "node:url";

/**
 * @type {Sound[]}
 */
export const data = await FS.readFile(
  fileURLToPath(new URL("../data.csv", import.meta.url)),
  "utf8",
).then(
  (content) =>
    new Promise((resolve, reject) => {
      CSV.parse(
        content,
        {
          columns: true,
          trim: true,
          cast(value) {
            if (["0", "1"].includes(value)) return value === "1";
            return value;
          },
        },
        (err, d) => {
          if (err) reject(err);
          else resolve(d);
        },
      );
    }),
);
