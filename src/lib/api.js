import { Redis } from '@upstash/redis';

export async function getLinks() {
  const redis = new Redis({
    url: import.meta.env.UPSTASH_REDIS_REST_URL,
    token: import.meta.env.UPSTASH_REDIS_REST_TOKEN,
  });

  let links = await redis.hgetall('links');
  return links;
}

export async function getLink(code) {
  const redis = new Redis({
    url: import.meta.env.UPSTASH_REDIS_REST_URL,
    token: import.meta.env.UPSTASH_REDIS_REST_TOKEN,
  });

  let link = await redis.hget('links', code);

  return link;
}
