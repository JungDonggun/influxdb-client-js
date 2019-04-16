import {Authorization, AuthorizationsApi} from '../api'
import {ServiceOptions} from '../types'

export default class {
  private service: AuthorizationsApi

  constructor(basePath: string, baseOptions: ServiceOptions) {
    this.service = new AuthorizationsApi({basePath, baseOptions})
  }

  public async get(id: string): Promise<Authorization> {
    const {data} = await this.service.authorizationsAuthIDGet(id)

    return data
  }

  public async getAuthorizationToken(username: string): Promise<string | null> {
    const authorizations = await this.getAllByUsername(username)

    if (authorizations[0]) {
      return authorizations[0].token || null
    }

    return null
  }

  public async getAll(orgID?: string): Promise<Authorization[]> {
    const {
      data: {authorizations},
    } = await this.service.authorizationsGet(
      undefined,
      undefined,
      undefined,
      orgID
    )

    return authorizations || []
  }

  public async getAllByUsername(username: string): Promise<Authorization[]> {
    const {
      data: {authorizations},
    } = await this.service.authorizationsGet(undefined, undefined, username)

    return authorizations || []
  }

  public async create(auth: Authorization): Promise<Authorization> {
    const {data} = await this.service.authorizationsPost(auth)

    return data
  }

  public async update(
    id: string,
    update: Partial<Authorization>
  ): Promise<Authorization> {
    const original = await this.get(id)
    const {data} = await this.service.authorizationsAuthIDPatch(id, {
      ...original,
      ...update,
    })

    return data
  }

  public async delete(id: string): Promise<Response> {
    const {data} = await this.service.authorizationsAuthIDDelete(id)

    return data
  }
}
