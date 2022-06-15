console.log('tes    ts are running...')

if(process.env.git_hash && process.env.git_branch){
    console.log('git_hash', JSON.stringify(process.env.git_hash))
    console.log('git_branch', JSON.stringify(process.env.git_branch))
}else{
    throw new Error('git  h a s  &   & br  a nch not found')
} 
