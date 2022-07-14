import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSearch } from '../../hooks/search';
import { Button, Container, Hero, Image, Message, Subtitle } from '../bulma';
import { Tabs, TabsOption } from '../bulma/Components/Tabs';
import { FormatListItem, List } from '../List/List';

export const SearchView = () => {
  const paths = useLocation().pathname.split('/');
  const [searchType, setSearchType] = useState<string>(paths[paths.length - 1]);
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const { data, loadData } = useSearch(searchType);
  const history = useHistory();

  const [searchText, setSearchText] = useState<string>('');

  const formatUser: FormatListItem = {
    title: {
      dataIndex: 'login',
    },
    image: {
      dataIndex: 'avatar_url',
      render: (data: any) => {
        return (
          <Image className="is-centered" isRounded square={128} src={data?.avatar_url} />
        );
      }
    },
    body: [],
    footer: [
      {
        dataIndex: 'url',
        render: (data: any) => (
          <Button className="is-primary has-text-black"
            onClick={() => {
              history.push(`/user/${data.login}`)
            }}
          >
            View More...
          </Button>
        ),
      }
    ],
    span: 4,
  }

  const formatRepository: FormatListItem = {
    title: {
      dataIndex: 'name',
    },
    subtitle: {
      dataIndex: 'owner.login',
      render: (data: any) => (
        <Subtitle>{data?.owner?.login}</Subtitle>
      )
    },
    body: [],
    footer: [{
      dataIndex: 'url',
      render: (data: any) => (
        <Button 
          className="is-primary has-text-black"
          onClick={() => {
            history.push(`/repos/${data.owner.login}/${data.name}`)
          }}
        >
          View Details
        </Button>
      ),
    }],
    span: 4,
  }
  
  const options: TabsOption[] = [
    {
      label: 'Users',
      tab: 'users',
    },
    {
      label: 'Repos',
      tab: 'repositories',
    },
  ];

  return (
    <Container>
      <Tabs 
        className="is-centered is-boxed mt-4" 
        onClick={(tab: TabsOption) => {
          setSearchText('');
          setSearchType(tab.tab);
          history.push(`/search/${tab.tab}`);
        }} 
        options={options}
      />
      <Hero className="is-small">
        <Hero.Body>
          <div className="field is-grouped">
            <div className="control is-expanded">
              <input 
                className="input is-primary is-normal is-focused" 
                type="text" 
                placeholder={`Search ${searchType}...`}
                onChange={e => {
                  setSearchText(e.target.value);
                  setShowMessage(false);
                }}
                value={searchText}
              />
            </div>
            <div className="control">
              <Button
                className="is-primary has-text-black"
                onClick={() => {
                  loadData(searchText);
                  if(searchText === '') {
                    setShowMessage(true);
                  }
                }}
              >
                Search
              </Button>
            </div>
          </div>
          {showMessage && <Message 
            onClose={() => setShowMessage(false)}
            className="is-primary" 
            title="Empty Search Warning" 
            message="Search text must not be empty" 
          />}
        </Hero.Body>
      </Hero>
      <Hero>
        <Hero.Body>
          <List data={data} format={searchType === 'users' ? formatUser : formatRepository} />
        </Hero.Body>
      </Hero>
    </Container>
  )
}