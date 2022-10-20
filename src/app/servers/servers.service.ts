export class ServersService {
  private servers: {id: number, name: string, status: string}[] = [
    {
      id: 1,
      name: 'Productionserver',
      status: 'online'
    },
    {
      id: 2,
      name: 'Testserver',
      status: 'offline'
    },
    {
      id: 3,
      name: 'Devserver',
      status: 'offline'
    }
  ];

  getServers() {
    return this.servers;
  }

  getServer(id: number) {
    console.log("getServer :: id :: ", id);
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    if(!server)
      return {id: -1,name: 'not found',status: 'null'};
    return server;
  }


  updateServer(id: number, serverInfo: {name: string, status: string}) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}
