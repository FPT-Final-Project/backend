const catchAsync = (fn: any) => (req: any, res: any, next: any) => {
    return Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  };

 export default {
     catchAsync
 }