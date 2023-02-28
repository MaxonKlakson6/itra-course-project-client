import { CreateButton } from 'src/static/styles/profileStyles';
import { Wrapper } from 'src/pages/Users/components/Tools/styles';

interface ToolsProps {
  id: number;
  isBlocked: boolean;
  handleDelete: (id: number) => void;
  handleToggleBlock: (id: number) => void;
  handleMakeAdmin: (id: number) => void;
}

const Tools = ({
  id,
  isBlocked,
  handleDelete,
  handleToggleBlock,
  handleMakeAdmin,
}: ToolsProps) => (
  <Wrapper>
    <CreateButton sx={{ color: '#fff' }} onClick={() => handleDelete(id)}>
      Delete
    </CreateButton>
    <CreateButton sx={{ color: '#fff' }} onClick={() => handleToggleBlock(id)}>
      {isBlocked ? 'Unblock' : 'Block'}
    </CreateButton>
    <CreateButton sx={{ color: '#fff' }} onClick={() => handleMakeAdmin(id)}>
      Make admin
    </CreateButton>
  </Wrapper>
);

export default Tools;
