import {Service} from '../service';
import {Signer} from '../cloudfront/signer';
export class CloudFrontCustomizations extends Service {
    static Signer: typeof Signer;
}