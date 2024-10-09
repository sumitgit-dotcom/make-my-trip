import fs from 'fs';
import { Document, Packer, Paragraph, TextRun } from 'docx';

export class ExtractPageInfo {
    constructor(page) {
        this.page = page;
    }

    async scrapePageInfo() {
        const data = [];

        const packageElements = await this.page.$$('.package-item');
        for (let pkg of packageElements) {
            const packageName = await pkg.$eval('.package-name', el => el.innerText);
            const packagePrice = await pkg.$eval('.package-price', el => el.innerText);
            const packageDuration = await pkg.$eval('.package-duration', el => el.innerText);

            data.push({
                name: packageName,
                price: packagePrice,
                duration: packageDuration
            });
        }

        return data;

    }
    async generateWordFile(data) {
        const doc = new Document();

        data.forEach(pkg => {
            doc.addSection({
                children: [
                    new Paragraph({
                        children: [
                            new TextRun(`Package Name: ${pkg.name}`),
                        ],
                    }),

                    new Paragraph({
                        children: [
                            new TextRun(`Price: ${pkg.price}`),
                        ],
                    }),
                    new Paragraph({
                        children: [
                            new TextRun(`Duration: ${pkg.duration}`),
                        ],
                    }),
                    new Paragraph({
                        children: [
                            new TextRun('------------------------------------'),
                        ],
                    }),
                ],
            });
        });

        // Save the Word document
        const buffer = await Packer.toBuffer(doc);
        fs.writeFileSync('Holiday_Packages_Info.docx', buffer);
        console.log('Word file generated: Holiday_Packages_Info.docx');
    }
}