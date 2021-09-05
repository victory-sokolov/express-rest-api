export default {
	port: 8001,
	host: 'localhost',
	db: 'mongodb://localhost:27017/rest-api',
	saltWorkFactor: 10,
	accessTokenTtl: '15m',
	refreshTokenTtl: '1y',
	privateKey: `-----BEGIN PRIVATE KEY-----
MIIBVAIBADANBgkqhkiG9w0BAQEFAASCAT4wggE6AgEAAkEA34zBAKZAIv7psQCq
jLVbHqgn8yvbYYtRz44hRe+F2ia+SB6zLVp4ehxL6OPKwqkhC21A/0KFtD9lOhP2
alVOqwIDAQABAkBJgFIFEKSN3RqhJALveMGY9tkLzyO2ksQ3ZhfykqqD6xOS4k+w
OyShNDRwZbbpd0+Vh1UIkV2sUljCT9D1ptaBAiEA/jUK0ZS85a4TDAwvA6G/SKDs
Lmn5dx4y00aQIlqFLZsCIQDhIFyC8zS65rvE9qzNaUNE2dAqfODQpSkqWIocIon8
MQIhAOzpVjnY2utbfljeCfrihbkUcMkY7uv68vdAbhf2MOQ9AiBaVv0ow2Xmlo7F
FGP1rgcDixCA7EnfEFf7mToa3jVXEQIgKYlvfLdE3m82fc3LVT915iZb6PMnyM5v
AGuEiDMvSTc=
-----END PRIVATE KEY-----`
};
