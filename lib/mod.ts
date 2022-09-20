import Surreal from "surrealdb.js";
import { ref, shallowRef } from "vue";
import type { Ref, ShallowRef } from "vue";

export class VueClient extends Surreal {
  constructor(url: string) {
    super(url)
  }
}

interface VueReturn<T> {
  loading: Ref<boolean>
  data: ShallowRef<T[] | null>
  error: Ref<any>
  reload: () => void
}

function createEmptyReturn<T>(reload: () => void): VueReturn<T> {
  return {
    loading: ref(false),
    data: shallowRef<T[] | null>(null),
    error: ref<any>(null),
    reload
  }
}

export function query<T = any>(client: VueClient, query: string, vars?: Record<string, unknown> | undefined) {
  const load = () => {
    client.query<T[]>(query, vars)
      .then(data => res.data.value = data)
      .catch(err => res.error.value = err)
      .finally(() => res.loading.value = false)
  }

  const res = createEmptyReturn<T>(load)

  load()

  return res
}

export function queryLive<T = any>(client: VueClient, query: string, vars?: Record<string, unknown> | undefined) {
  const load = () => {
    client.query<T[]>(query, vars)
      .then(data => res.data.value = data)
      .catch(err => res.error.value = err)
      .finally(() => res.loading.value = false)
  }

  const res = createEmptyReturn<T>(load)

  load()

  console.warn(`[surrealdb.vue] As live-queries are currently disabled we don't support them yet! Instead queryLive has the same behavior as query!`)
  console.warn(`[surrealdb.vue] In the future the return.data-ref will be keept up to date!`)

  return res
}
