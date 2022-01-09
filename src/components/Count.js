import React from 'react'

function Count({text,count}) {
    console.log(`rendering ${text}`);
    return (
        <div>
            <p>{text}-{count}</p>
        </div>
    )
}

export default React.memo(Count)
