console.log('tests are running...')

if(process.env.git_hash && process.env.git_branch){
    console.log('git_hash', JSON.stringify(process.env.git_hash))
    console.log('git_branch', JSON.stringify(process.env.git_branch))
}else{
    throw new Error('git hash && branch not found')
}
 
 
 
 
