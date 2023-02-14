import { MarkdownField } from 'src/components/Markdown/styles';

interface MarkdownProps {
  value: string;
}

const Markdown = ({ value }: MarkdownProps) => (
  <MarkdownField>{value}</MarkdownField>
);

export default Markdown;
