var TimeLimitedCache = function () {
    // We store:   key → { value, expireTime }
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    const now = Date.now();
    const expireTime = now + duration;

    // Check if key already exists AND is not expired
    const existed = this.cache.has(key) &&
        (this.cache.get(key).expireTime > now);

    // Set / overwrite the entry
    this.cache.set(key, {
        value: value,
        expireTime: expireTime
    });

    return existed;
};

/** 
 * @param {number} key
 * @return {number} value associated with key or -1
 */
TimeLimitedCache.prototype.get = function (key) {
    const now = Date.now();

    if (!this.cache.has(key)) {
        return -1;
    }

    const entry = this.cache.get(key);

    if (entry.expireTime <= now) {
        // It's expired → clean it up (optional but good practice)
        this.cache.delete(key);
        return -1;
    }

    return entry.value;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    const now = Date.now();
    let count = 0;

    // We must check every entry because some may have expired
    for (const [key, entry] of this.cache) {
        if (entry.expireTime > now) {
            count++;
        } else {
            // Optional: clean up expired entries while we're here
            this.cache.delete(key);
        }
    }

    return count;
};