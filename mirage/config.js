export default function() {
  this.get( '/foos/1', () => {
    return {
      data: {
        id: 1,
        type: 'foo',
        relationships: {
          bars: {
            links: {
              related: 'bars'
            }
          }
        }
      }
    }
  } );
}
