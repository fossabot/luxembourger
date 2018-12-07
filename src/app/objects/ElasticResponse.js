import ElasticHits from "./ElasticHits";
import ElasticHit from "./ElasticHit";

export default class ElasticResponse {
    took: number = 164;
    timed_out: boolean = false;
    hits: ElasticHits;
}