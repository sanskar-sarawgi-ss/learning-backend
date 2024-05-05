// const asyncHandler = (fn) => async (req, res, next) => {
//     try{
//         await fn(req, res, next)
//     }catch(error){
//         res.status(error.status || 500).json({
//             sucessful
//         })
//     }
// }

const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req,res,next)).catch((err) => next(err))
}

export {asyncHandler}