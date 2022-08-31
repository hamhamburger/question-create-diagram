import { TextField } from '@mui/material';
import { useCallback } from 'react';
import { Handle, Position } from 'react-flow-renderer';

import { handleStyle } from '../../css/handleStyle';

    

function ResultNode({ data }) {
  const {label} = data
  const onChange = useCallback((evt) => {
    data.label = evt.target.value;
  }, []);

  return (
    <div className="result-node">
      <Handle type="target" position={Position.Top} style={handleStyle}/>
      <TextField id="text" name="text" onChange={onChange} ariant='outlined' multiline
                        maxRows={4} margin='normal' placeholder='メッセージを入力してください'/>


    </div>
  );
}
export default ResultNode;
