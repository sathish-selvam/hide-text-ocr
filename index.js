const { createWorker } = require("tesseract.js");

// import Tesseract from "tesseract.js";
const path = require("path");

const worker = createWorker();

(async () => {
  await worker.load();
  await worker.loadLanguage("eng");
  await worker.initialize("eng");
  const data = await worker.recognize(path.resolve(__dirname, "images", "eng_bw.png"));
  console.log(data);
  await worker.terminate();
})();
