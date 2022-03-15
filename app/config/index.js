/**获取路由、操作用户信息*/
const userConfig = { //Jenkins账户名以及token
    name: 'circle',
    token: '119bbfbfb7ad5f52525c2b9ee4e4f1555b'
}
const requestConfig = {
    protocol: 'http', //协议
    domain: 'localhost', //Jenkins域名
    port: '9000' //端口
}
const{name,token}=userConfig
const {protocol,domain,port}=requestConfig

module.exports = {
    PrefixUrl: `${protocol}://${name}:${token}@${domain}:${port}/`
}