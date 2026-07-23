import {createClient} from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'b7wqv3yo',
  dataset: 'production',
  useCdn: false, // Set to false to bypass cache and get fresh content immediately in development
  apiVersion: '2024-01-01'
})

export function portableTextToHtml(blocks: any[]): string {
  if (!blocks || !Array.isArray(blocks)) return '';
  return blocks.map(block => {
    if (block._type === 'block') {
      const text = block.children ? block.children.map((c: any) => {
        let spanText = c.text || '';
        if (c.marks && Array.isArray(c.marks)) {
          if (c.marks.includes('strong')) spanText = `<strong>${spanText}</strong>`;
          if (c.marks.includes('em')) spanText = `<em>${spanText}</em>`;
        }
        return spanText;
      }).join('') : '';
      
      const tag = block.style === 'h3' ? 'h3' : block.style === 'h4' ? 'h4' : 'p';
      return `<${tag}>${text}</${tag}>`;
    }
    return '';
  }).join('');
}
