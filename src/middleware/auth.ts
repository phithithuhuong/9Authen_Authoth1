import jwt from "jsonwebtoken";
export const auth = async (req,res,next)=>{
    try{
        let accessToken = req.body["access_token"];
        if(accessToken){//kiểm tra có hợp lệ không
            jwt.verify(accessToken,"123456789",(err,decoded)=>{
                if (err) {//nếu lỗi trả về lỗi
                    return res.status(401).json({
                        message: err.message,
                        status: 401,
                    });
                } else {
                    req.decoded = decoded;
                    console.log(req.decoded,3);
                    next()
                }
            })
        } else {
            return res.status(401).json({
                message: 'No token provided.',
                status: 401,
            });

        }

    }catch(err){
        console.log(err)
        return res.status(401).json({
            message: err.message,
            status: 401,
        });
    }
}