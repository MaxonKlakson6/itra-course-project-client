import ReactMarkdown from 'react-markdown';

import { MarkdownWrapper } from 'src/components/Markdown/styles';

interface MarkdownProps {
  value: string;
}

const Markdown = ({ value }: MarkdownProps) => (
  <MarkdownWrapper>
    <ReactMarkdown>{value}</ReactMarkdown>
  </MarkdownWrapper>
);

export default Markdown;
