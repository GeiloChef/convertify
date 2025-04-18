import fs from 'fs';
import path from 'path';
import { config } from 'dotenv';
import { OpenAI } from 'openai';
import type {UnitDataModel} from "../models/Unit.Models";
import {createUnitDataModel} from "../utils/UnitData.Utils";
import i18next from 'i18next';
import {dirname} from "pathe";


// Utility to load all JSON translation files from a directory
function loadTranslationsFromDir(locale: string): Record<string, any> {
  const translationsPath = path.resolve(__dirname, `../i18n/${locale}`);
  const files = fs.readdirSync(translationsPath);

  const translations: Record<string, any> = {};

  for (const file of files) {
    if (file.endsWith('.json')) {
      const namespace = file.replace('.json', '');
      const filePath = path.join(translationsPath, file);
      const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      translations[namespace] = content;
    }
  }

  return translations;
}

// Load all translations under a specific locale (e.g., 'en')
const locale = 'en';
const resources = {
  [locale]: {
    translation: Object.assign({}, ...Object.values(loadTranslationsFromDir(locale))),
  },
};

// Init i18next with merged translations
i18next.init({
  lng: locale,
  resources,
});

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const markdownDir = path.resolve(__dirname, '../i18n/en/markdown');

// Create markdown directory if it doesn't exist
if (!fs.existsSync(markdownDir)) {
  fs.mkdirSync(markdownDir);
}

async function generateMarkdownForUnit(unitId: string, unitName: string, category: string, filePath: string): Promise<void> {
  const prompt = `Generate a rich, informative Markdown file for the unit "${unitName}" in the context of "${category}". Use the following structure and tone:

# <Unit Name> (symbol)

Start with a clear explanation of the unit and its relationship to other relevant units (e.g., conversions). Use **bold**, lists, and blockquotes to highlight important info.

## 🌍 Applications

Include **three categories** of real-world examples, with **2–3 bullet points each**.

## 📏 Unit Comparisons

Provide a markdown table comparing this unit to others in the same category.

## 🌟 Fun Facts

Add 2–3 interesting or surprising facts about the unit.

## 🔄 Quick Conversions

Include quick reference conversions (e.g., 1 cm = 0.01 m = 10 mm = 0.394 in).

Use a warm, educational tone. Output only the markdown.
`;



  const response = await openai.chat.completions.create({
    model: "gpt-4.1-nano",
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.7,
  });

  const markdown = response.choices[0]?.message?.content;

  if (!markdown) {
    console.error(`⚠️ No content returned for ${unitName}`);
    return;
  }


  fs.writeFileSync(filePath, markdown, 'utf-8');
  console.log(`✅ Saved ${unitName}.md in ${filePath}`);
}

async function main(): Promise<void> {
  const dataModel: UnitDataModel = createUnitDataModel();
  let filesToGenerate: number = 0;

  // Loop through each category (UnitType)
  for (const [categoryKey, unitTypeObject] of Object.entries(dataModel)) {
    // Loop through each unit in the category
    for (const unit of unitTypeObject.unitGroups) {
      for (const unitItem of unit.items) {
        const filePath = path.join(markdownDir, `${categoryKey}/${unitItem.id}.md`);

        const translatedUnitName = i18next.t(unitItem.name);

        const dir = dirname(filePath);

        if (!fs.existsSync(filePath)) {

          if (!fs.existsSync(path.join(markdownDir, `${categoryKey}`))) {
            fs.mkdirSync(dir, { recursive: true });
          }

          console.log(`📝 Generating for ${translatedUnitName} (category: ${categoryKey}) in file ${unitItem.id}.md`);
          await generateMarkdownForUnit(unitItem.id, translatedUnitName, categoryKey, filePath);
          filesToGenerate++
/*          if (filesToGenerate === 10) {
            return;
          }*/
        } else {
          console.log(`📁 Skipping ${translatedUnitName} (already exists)`);
        }
      }
    }
  }
  console.log(filesToGenerate);

}

main();
